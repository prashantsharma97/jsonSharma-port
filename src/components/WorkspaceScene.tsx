import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function WorkspaceScene() {
  const deskRef = useRef<Mesh>(null);
  const monitorRef = useRef<Mesh>(null);
  const keyboardRef = useRef<Mesh>(null);

  useFrame(() => {
    if (deskRef.current) {
      deskRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Desk */}
      <mesh ref={deskRef} position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Monitor */}
      <mesh ref={monitorRef} position={[0, 1.2, -0.3]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#333333" />
        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.9, 1.1, 0.01]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
        </mesh>
      </mesh>

      {/* Keyboard */}
      <mesh ref={keyboardRef} position={[0, 0.3, 0.3]}>
        <boxGeometry args={[1.2, 0.1, 0.4]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  );
}