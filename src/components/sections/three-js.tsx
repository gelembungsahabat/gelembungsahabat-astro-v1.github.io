import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Text } from "@react-three/drei";
import { FullBody } from "../minecraft-model";

export function ThreeJS() {
  return (
    <section>
      <Canvas
        camera={{ position: [3, 3, 3] }}
        style={{
          width: "100vw",
          height: "100vh",
          background: `radial-gradient(
            circle at 50% 50%, 
          rgba(100,100,255,0.3), 
          rgba(10,10,30,0.9)),
            linear-gradient(180deg, #0a0a1e, #0a0a1e)`,
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <FullBody />
        <Text
          position={[0, 2.3, 0]} // above the cube
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          I'm learning 3D Modelling
        </Text>
        <Text
          position={[0, 2, 0]} // above the cube
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          with Three.JS
        </Text>
        <Grid
          args={[20, 20]} // size of the grid
          cellSize={1}
          cellThickness={0.5}
          sectionThickness={1}
          sectionColor="#444"
          cellColor="#999"
          fadeDistance={30}
          fadeStrength={1}
          infiniteGrid={true}
        />
        <OrbitControls />
      </Canvas>
    </section>
  );
}
