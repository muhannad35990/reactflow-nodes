"use client"
import { useCallback, useState } from "react"
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant
} from "@xyflow/react"

import "@xyflow/react/dist/style.css"
import AddBtn from "../atoms/AddBtn"
import AddNodeDrawer from "../molecules/AddNodeDrawer"
import { FormData, nodeType } from "@/types"

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } }
]
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }]
function FlowSection() {
  const [showAddDrawer, setShowAddDrawer] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const addNewNode = (data: FormData) => {
    setNodes((prev) => [
      ...prev,
      {
        id: (prev.length + 1).toString(),
        position: {
          x: prev[prev.length - 1].position.x + 100,
          y: prev[prev.length - 1].position.y + 100
        },
        data: { label: data.name },
        style: {
          backgroundColor: data.type === nodeType.habit && "red",
          borderRadius: data.type === nodeType.habit && "50%"
        }
      }
    ])
    setEdges((prev) => [
      ...prev,
      {
        id: `e${nodes.length.toString()}-${(nodes.length + 1).toString()}`,
        source: nodes.length.toString(),
        target: (nodes.length + 1).toString()
      }
    ])
    setShowAddDrawer(false)
  }
  return (
    <div className="relative h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      <AddBtn onClick={() => setShowAddDrawer(true)} />
      <AddNodeDrawer
        open={showAddDrawer}
        setOpen={setShowAddDrawer}
        onSubmit={addNewNode}
      />
    </div>
  )
}

export default FlowSection
