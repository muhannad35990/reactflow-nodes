import { FormData, nodeType } from "@/types"
import { addEdge, useEdgesState, useNodesState } from "@xyflow/react"
import { useCallback, useEffect, useState } from "react"

const initialNodes = [
  {
    id: "1",
    position: { x: 200, y: 100 },
    data: { label: "First Node", type: "user", username: "Test user" }
  },
  {
    id: "2",

    position: { x: 200, y: 200 },
    data: { label: "Second Node", type: "habit", habit: "Habit1" },
    style: {
      backgroundColor: "red",
      borderRadius: "50%"
    }
  }
]
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }]
const useNode = () => {
  const [showAddDrawer, setShowAddDrawer] = useState({
    show: false,
    data: null
  })
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    const sel: any = nodes.find((node: any) => node.selected === true)

    if (sel) {
      setShowAddDrawer({ show: true, data: sel })
    }
  }, [nodes])

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const addNewNode = (data: FormData) => {
    setNodes((prev: any) => [
      ...prev,
      {
        id: (prev.length + 1).toString(),
        position: {
          x: prev[prev.length - 1].position.x + 100,
          y: prev[prev.length - 1].position.y + 100
        },
        data: {
          label: data.name,
          type: data.type,
          habit: data.habit,
          username: data.username
        },
        style: {
          backgroundColor: data.type === nodeType.habit && "red",
          borderRadius: data.type === nodeType.habit && "50%"
        }
      }
    ])
    setShowAddDrawer({ show: false, data: null })
    setEdges((prev) => [
      ...prev,
      {
        id: `e${nodes.length.toString()}-${(nodes.length + 1).toString()}`,
        source: nodes.length.toString(),
        target: (nodes.length + 1).toString()
      }
    ])
  }
  const updateNode = (data: any) => {
    if (!data) return
    let temp: any = []
    nodes.map((node: any) => {
      node.id === data.id
        ? temp.push({
            ...node,
            data: { ...node?.data, label: data?.name, ...data },
            style: {
              backgroundColor: data.type === nodeType.habit && "red",
              borderRadius: data.type === nodeType.habit && "50%"
            },
            selected: false
          })
        : temp.push(node)
    })

    setNodes(temp)

    setShowAddDrawer({ show: false, data: null })
  }
  return {
    nodes,
    edges,
    addNewNode,
    updateNode,
    onConnect,

    showAddDrawer,
    onEdgesChange,
    onNodesChange,
    setShowAddDrawer
  }
}

export default useNode
