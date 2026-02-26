/**
 * @PATH [src/App.jsx]
 * @REV [20260226-0856]
 * @MODULE [ShiftPlanner]
 * @STATUS [DEV]
 * @FILETYPE [NCA]
 * @DESC [Description (max 80 chars)]
 * @COMPLIANCE [None]
 * -------------------------------------
 * @TODO_START
 * [?] 'setTechs' is declared but its value is never read.
 * [?] will need to check legitimacy of this file...
 * @TODO_END
 * =====================================*/

import { useState, useEffect } from 'react'
import MainLayout from './components/MainLayout'
import { createWorkOrder, createTech } from './schema/models'
import './styles/index.css'

// Simple storage key
const STORAGE_KEY = 'shift_runner_v1'

function App() {
  // 1. Initialize State with your Models
  const [techs, setTechs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY + '_techs')
    if (saved) return JSON.parse(saved)
    
    // Default Techs based on your screenshot
    return [
      createTech({ initials: 'JC', hoursAvailable: 7.0 }),
      createTech({ initials: 'TG', hoursAvailable: 7.0 }),
      createTech({ initials: 'RM', hoursAvailable: 7.0 }),
      createTech({ initials: 'JS', hoursAvailable: 7.0 }),
      createTech({ initials: 'LW', hoursAvailable: 7.0 })

    ]
  })

  const [workOrders, setWorkOrders] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY + '_wos')
    return saved ? JSON.parse(saved) : []
  })

  // 2. Persist to LocalStorage automatically
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY + '_techs', JSON.stringify(techs))
    localStorage.setItem(STORAGE_KEY + '_wos', JSON.stringify(workOrders))
  }, [techs, workOrders])

  // 3. Actions
  const addRow = () => {
    // Uses YOUR schema factory
    const newRow = createWorkOrder({ 
      woFrequency: 'Daily', 
      woType: 'PM',
      time: 1.0 
    })
    setWorkOrders([...workOrders, newRow])
  }

  const updateRow = (id, field, value) => {
    setWorkOrders(workOrders.map(wo => 
      wo.id === id ? { ...wo, [field]: value } : wo
    ))
  }

  // 4. Calculations (The "Remain" logic)
  const totalAssignedHours = workOrders.reduce((sum, wo) => sum + (Number(wo.time) || 0), 0)
  // Simplified logic: Assuming 'RM' and 'JC' are on shift. 
  // In a real version, you'd filter by active techs.
  const totalCapacity = techs.reduce((sum, t) => sum + (Number(t.hoursAvailable) || 0), 0)
  const remainingHours = totalCapacity - totalAssignedHours

return (
    <MainLayout headerConfig={{ title: 'Daily Turnover' }}>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2 className="text-2xl font-bold mb-4">Shift Turnover - {new Date().toLocaleDateString()}</h2>
        
        {/* THE GRID */}
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300" border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">WO #</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Item / Asset</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Est. Hours</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Tech(s)</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Freq</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Task Description</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {workOrders.map(wo => (
                <tr key={wo.id}>
                  <td>
                    <input 
                      className="border rounded px-2 py-1 w-20"
                      value={wo.woNumber} 
                      onChange={(e) => updateRow(wo.id, 'woNumber', e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      className="border rounded px-2 py-1 w-full"
                      value={wo.asset} 
                      onChange={(e) => updateRow(wo.id, 'asset', e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      step="0.25"
                      className="border rounded px-2 py-1 w-16"
                      value={wo.time} 
                      onChange={(e) => updateRow(wo.id, 'time', parseFloat(e.target.value))}
                    />
                  </td>
                  <td>
                    <input 
                      className="border rounded px-2 py-1 w-full"
                      value={wo.assignment ? wo.assignment.join(', ') : ''} 
                      onChange={(e) => updateRow(wo.id, 'assignment', e.target.value.split(','))}
                      placeholder="JC, RM"
                    />
                  </td>
                  <td>
                    <select 
                      className="border rounded px-2 py-1"
                      value={wo.woFrequency}
                      onChange={(e) => updateRow(wo.id, 'woFrequency', e.target.value)}
                    >
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      className="border rounded px-2 py-1"
                      value={wo.woType}
                      onChange={(e) => updateRow(wo.id, 'woType', e.target.value)}
                    >
                      <option>PM</option>
                      <option>QC</option>
                      <option>WO</option>
                    </select>
                  </td>
                  <td>
                    <textarea 
                      className="border rounded px-2 py-1 w-full min-h-[40px]"
                      value={wo.task} 
                      onChange={(e) => updateRow(wo.id, 'task', e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      className="border rounded px-2 py-1 w-full"
                      value={wo.notes} 
                      onChange={(e) => updateRow(wo.id, 'notes', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button 
          onClick={addRow} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Row
        </button>

        {/* FOOTER SUMMARY */}
        <div className="mt-6 border-t-2 border-gray-300 pt-4 text-lg">
          <strong>Recurring Total:</strong> {totalAssignedHours.toFixed(1)} hrs | 
          <strong className="ml-4"> Shift Capacity:</strong> {totalCapacity.toFixed(1)} hrs | 
          <strong className={`ml-4 ${remainingHours < 0 ? 'text-red-600' : 'text-green-600'}`}>
             Remain: {remainingHours.toFixed(1)} hrs
          </strong>
        </div>
      </div>
    </MainLayout>
  )
}

export default App