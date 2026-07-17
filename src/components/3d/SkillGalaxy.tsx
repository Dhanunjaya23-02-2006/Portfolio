import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  "React", "JavaScript", "Java", "Node.js", "Python", "AWS", "Docker",
  "Next.js", "TailwindCSS", "Framer Motion", "MongoDB", "PostgreSQL",
  "Redis", "TensorFlow", "Scikit-Learn", "Three.js",
  "Vite", "Express", "Firebase", "Linux", "Git"
];

const SkillNode = ({ position, name }: { position: [number, number, number], name: string }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      // Make the text and node always face the camera
      groupRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position} ref={groupRef}>
      <mesh 
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }} 
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#22D3EE" : "#7C3AED"} 
          emissive={hovered ? "#22D3EE" : "#7C3AED"}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
      </mesh>
      <Text
        position={[0, 0.15, 0]}
        fontSize={hovered ? 0.15 : 0.1}
        color={hovered ? "#FFFFFF" : "#94A3B8"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#050816"
      >
        {name}
      </Text>
    </group>
  );
};

export const SkillGalaxy = () => {
  const nodes = useMemo(() => {
    return skills.map((name) => {
      // Generate points on a sphere using fibonacci sphere algorithm for even distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      return { name, position: [x, y, z] as [number, number, number] };
    });
  }, []);

  return (
    <div className="w-full h-[600px] relative rounded-3xl overflow-hidden glass-card shadow-2xl cursor-grab active:cursor-grabbing">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <p className="text-sm font-mono text-cyan/70">Interactive 3D Galaxy</p>
        <p className="text-xs text-textMuted">Drag to rotate, hover to explore</p>
      </div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        
        {/* Core star/sun */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#050816" />
        </mesh>
        
        {nodes.map((node, i) => (
          <SkillNode key={i} name={node.name} position={node.position} />
        ))}
      </Canvas>
    </div>
  );
};
