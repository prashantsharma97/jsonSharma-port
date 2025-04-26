export function FloatingSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#22c55e" wireframe />
    </mesh>
  );
}