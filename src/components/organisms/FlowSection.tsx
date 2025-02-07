"use client"
import { useCallback, useEffect, useState } from "react"
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
import useNode from "../particles/hooks/useNode"

function FlowSection() {
  const {
    addNewNode,
    updateNode,
    onConnect,
    showAddDrawer,
    onEdgesChange,
    onNodesChange,
    edges,
    nodes,
    setShowAddDrawer
  } = useNode()
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
      <AddBtn onClick={() => setShowAddDrawer({ show: true, data: null })} />
      <AddNodeDrawer
        open={showAddDrawer}
        setOpen={setShowAddDrawer}
        addNewNode={addNewNode}
        updateNode={updateNode}
      />
    </div>
  )
}

export default FlowSection
