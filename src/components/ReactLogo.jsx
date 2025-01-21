import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('models/react.glb');

    return (
         <group position={[8, 8, 0]} scale={0.3} {...props}>
             <Float floatIntensity={1}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </Float>
        </group>
    );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;