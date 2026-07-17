import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows, OrbitControls, RoundedBox, Html, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect, useRef } from 'react';

const DeveloperWorkspace = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Mouse-follow parallax
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 20;
    const targetY = (state.pointer.y * Math.PI) / 20;
    
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
  });

  const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: '#333333',
    metalness: 0.8,
    roughness: 0.2,
  });

  const screenMaterial = new THREE.MeshStandardMaterial({
    color: '#000000',
    metalness: 0.5,
    roughness: 0.1,
    emissive: '#0f172a',
    emissiveIntensity: 0.5
  });

  // Typing effect
  const [typingText, setTypingText] = useState("Initializing Agent...");
  
  useEffect(() => {
    const texts = [
      "Initializing Agent...",
      "Loading Models...",
      "Connecting RAG...",
      "Deployment Ready ✓"
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setTypingText(texts[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* LAPTOP - 20% Larger & Tilted */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group scale={1.2} rotation={[0.1, 0, 0]}>
          {/* Laptop Base */}
          <RoundedBox args={[1.6, 0.05, 1.1]} radius={0.02} position={[0, 0.025, 0]}>
            <primitive object={aluminumMaterial} />
          </RoundedBox>
          
          {/* Laptop Screen */}
          <group position={[0, 0.05, -0.5]} rotation={[-0.2, 0, 0]}>
            <RoundedBox args={[1.6, 1.1, 0.05]} radius={0.02} position={[0, 0.55, 0]}>
              <primitive object={aluminumMaterial} />
            </RoundedBox>
            <mesh position={[0, 0.55, 0.026]}>
              <planeGeometry args={[1.5, 1.0]} />
              <primitive object={screenMaterial} />
            </mesh>
            {/* Screen Content as Html */}
            <Html transform occlude position={[0, 0.55, 0.027]} scale={0.1}>
              <div className="w-[1500px] h-[1000px] flex items-center justify-center font-mono text-5xl text-primary font-bold">
                {typingText}
                <span className="animate-pulse">_</span>
              </div>
            </Html>
          </group>

          {/* Keyboard */}
          <RoundedBox args={[0.9, 0.02, 0.4]} radius={0.01} position={[0, 0.06, 0.2]}>
            <meshStandardMaterial color="#111111" />
          </RoundedBox>

          {/* Mouse */}
          <RoundedBox args={[0.15, 0.04, 0.25]} radius={0.03} position={[0.65, 0.02, 0.2]}>
            <meshStandardMaterial color="#111111" />
          </RoundedBox>

          {/* Phone */}
          <RoundedBox args={[0.3, 0.02, 0.6]} radius={0.02} position={[-0.7, 0.01, 0.2]} rotation={[0, 0.3, 0]}>
            <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <mesh position={[-0.7, 0.021, 0.2]} rotation={[-Math.PI / 2, 0, -0.3]}>
            <planeGeometry args={[0.27, 0.57]} />
            <meshStandardMaterial color="#000000" emissive="#8B5CF6" emissiveIntensity={0.2} />
          </mesh>

          {/* Coffee Mug */}
          <group position={[0.8, 0, -0.2]}>
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
              <meshStandardMaterial color="#eeeeee" roughness={0.1} />
            </mesh>
            {/* Handle */}
            <mesh position={[0.18, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.1, 0.03, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#eeeeee" roughness={0.1} />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Floating Glass Panels */}
      
      {/* Code Panel (Left) */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={1.5}>
        <group position={[-1.8, 1.2, -0.2]} rotation={[0, 0.3, 0]}>
          <Html transform distanceFactor={1.5}>
            <div className="w-[320px] h-[360px] rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex flex-col p-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white/80 font-mono text-[14px] whitespace-pre-wrap leading-relaxed">
                <span className="text-secondary">import</span> {'{ LLM }'} <span className="text-secondary">from</span> <span className="text-accent">"ai"</span>;{'\n\n'}
                <span className="text-secondary">const</span> agent = <span className="text-secondary">new</span> LLM({'{'}{'\n'}
                {'  '}model: <span className="text-accent">"gpt-4"</span>,{'\n'}
                {'  '}temperature: <span className="text-primary">0.7</span>{'\n'}
                {'}'});{'\n\n'}
                <span className="text-secondary">await</span> agent.init();
              </div>
            </div>
          </Html>
        </group>
      </Float>

      {/* Dashboard Panel (Right) */}
      <Float speed={2.5} rotationIntensity={0.1} floatIntensity={1.2}>
        <group position={[1.8, 1.0, -0.2]} rotation={[0, -0.3, 0]}>
          <Html transform distanceFactor={1.5}>
            <div className="w-[320px] h-[360px] rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex flex-col p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">AI Agent Dashboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-white/50 mb-1">API Status</div>
                  <div className="text-lg font-bold text-green-400">99.98%</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-white/50 mb-1">Latency</div>
                  <div className="text-lg font-bold text-secondary">42 ms</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-white/50 mb-1">AI Accuracy</div>
                  <div className="text-lg font-bold text-primary">96%</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-white/50 mb-1">Deployments</div>
                  <div className="text-lg font-bold text-white">24</div>
                </div>
                <div className="col-span-2 bg-white/5 p-4 rounded-xl border border-white/5 mt-2 flex justify-between items-center">
                  <div className="text-sm text-white/50">Active Users</div>
                  <div className="text-2xl font-bold text-accent">2.1K</div>
                </div>
              </div>
            </div>
          </Html>
        </group>
      </Float>

      {/* Connection Lines */}
      {/* Laptop to Left Panel */}
      <QuadraticBezierLine 
        start={[0, 0.5, -0.2]} 
        mid={[-0.9, 0.8, -0.2]} 
        end={[-1.8, 1.2, -0.2]} 
        color="#06B6D4" 
        lineWidth={1.5} 
        transparent 
        opacity={0.6} 
      />
      {/* Laptop to Right Panel */}
      <QuadraticBezierLine 
        start={[0, 0.5, -0.2]} 
        mid={[0.9, 0.7, -0.2]} 
        end={[1.8, 1.0, -0.2]} 
        color="#8B5CF6" 
        lineWidth={1.5} 
        transparent 
        opacity={0.6} 
      />

      {/* Floating Particles (Retained from original) */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-1.0, 2.2, 0.4]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[1.2, 2.4, 0.2]}>
          <icosahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>
    </group>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradients (subtle) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 mt-12">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-textMuted">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
            Hello, <br/>
            I'm <span className="text-white">Dhanunjaya.</span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium text-primary mb-6 flex flex-col gap-2">
            <span>AI Engineer</span>
            <span>Full Stack Developer</span>
          </div>

          <p className="text-lg text-textMuted max-w-xl mb-10">
            Building AI products that solve real problems. Specialized in LLMs, RAG, Agentic AI, and scalable full-stack development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-3 bg-white text-background font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Content - 3D */}
        <div className="h-[600px] w-full hidden lg:block relative cursor-grab active:cursor-grabbing">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 1.5, 4.5]} fov={45} />
            <OrbitControls 
              autoRotate 
              autoRotateSpeed={0.5} 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2 - 0.1} 
              minPolarAngle={Math.PI / 3}
            />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-5, 5, -5]} color="#06B6D4" intensity={2} />
            <pointLight position={[5, 5, -5]} color="#8B5CF6" intensity={2} />
            
            <DeveloperWorkspace />
            
            <Environment preset="city" />
            <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={10} blur={2} far={4} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
