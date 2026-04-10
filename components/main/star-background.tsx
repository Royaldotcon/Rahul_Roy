"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame, useThree } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   STAR FIELD — three layers with different
   colours, sizes and rotation speeds
───────────────────────────────────────────── */
const StarLayer = ({
  count,
  radius,
  color,
  size,
  speedX,
  speedY,
  ...props
}: {
  count: number;
  radius: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
} & PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * speedX;
      ref.current.rotation.y -= delta * speedY;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
};

export const StarBackground = (props: PointsProps) => {
  return (
    <>
      {/* White base stars */}
      <StarLayer count={1500} radius={1.2} color="#ffffff" size={0.0018} speedX={0.10} speedY={0.067} />
      {/* Cyan accent stars */}
      <StarLayer count={600}  radius={1.0} color="#00f5ff" size={0.0025} speedX={0.06} speedY={0.04}  />
      {/* Purple accent stars */}
      <StarLayer count={400}  radius={1.4} color="#bf5fff" size={0.002}  speedX={0.14} speedY={0.09}  />
      {/* Pink distant stars */}
      <StarLayer count={200}  radius={1.6} color="#ff2d7e" size={0.0015} speedX={0.05} speedY={0.03}  />
    </>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-20 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);