import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'


export default function Home() {
  return (
    <div>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        {/* <ambientLight intensity={0.4} position={[10, 10, 10]} /> */}
        <mesh rotation={[3, 2, 3]}>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  )
}
