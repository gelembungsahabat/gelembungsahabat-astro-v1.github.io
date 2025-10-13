export function Head() {
  return (
    <>
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0077ff" />
      </mesh>
    </>
  );
}

export function Body() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#aaaaa" />
      </mesh>
    </>
  );
}

export function LeftHand() {
  return (
    <>
      <mesh position={[0.7, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.5]} />
        <meshStandardMaterial color="#c3d1df" />
      </mesh>
    </>
  );
}

export function RightHand() {
  return (
    <>
      <mesh position={[-0.7, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.5]} />
        <meshStandardMaterial color="#c3d1df" />
      </mesh>
    </>
  );
}

export function LeftLeg() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="#aaaaa" />
      </mesh>
    </>
  );
}

export function RightLeg() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="#aaaaa" />
      </mesh>
    </>
  );
}
