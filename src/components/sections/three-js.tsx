import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Environment } from "@react-three/drei";

export function ThreeJS() {
  return (
    <section
      style={{
        height: "100vh",
        background: "transparent",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} />
        <Float speed={2} rotationIntensity={1}>
          <Text3D
            font="/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            bevelEnabled
            bevelSize={0.02}
            position={[-1, 1, 0]}
          >
            React
            <meshStandardMaterial color="#61dafb" />
          </Text3D>
          <Text3D
            font="/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            bevelEnabled
            bevelSize={0.02}
            position={[-1, 0, 0]}
          >
            TypeScript
            <meshStandardMaterial color="#3178c6" />
          </Text3D>
          <Text3D
            font="/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            bevelEnabled
            bevelSize={0.02}
            position={[-1, -1, 0]}
          >
            ThreeJS
            <meshStandardMaterial color="#ffffff" />
          </Text3D>
        </Float>
      </Canvas>
    </section>
  );
}
