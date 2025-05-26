import { ReactFlow, Background, Controls } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const nodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { 'label':'Hello'}
    }
]

function Flow() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}> {/*Parent container of ReactFlows need a height & width specified. React flow uses this*/}
            <ReactFlow nodes={nodes}>
                <h1>Hello</h1>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Flow;