import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"

type Job = {
  id: number
  taskName: string
  status: boolean
}

export default function Job() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [extra, setExtra] = useState("") 

  useEffect(() => {
    axios.get("http://localhost:8080/jobs").then(res => {
      setTimeout(() => {
        setJobs(res.data)
        setLoading(false)
      }, 1000)
    })
  }, [])

  const addJob = () => {
    if (name.trim() === "") return
    axios.post("http://localhost:8080/jobs", { taskName: name, status: false }).then(res => {
      let arr = [...jobs]
      arr.push(res.data)
      setJobs(arr)
      setName("")
    })
  }

  const deleteJob = (id: number) => {
    axios.delete("http://localhost:8080/jobs/" + id).then(() => {
      setJobs(jobs.filter(j => j.id !== id))
    })
  }

  const editJob = (job: Job) => {
    let newName = prompt("Nhập tên mới:", job.taskName)
    if (newName) {
      axios.patch("http://localhost:8080/jobs/" + job.id, { taskName: newName }).then(res => {
        setJobs(jobs.map(j => j.id === job.id ? res.data : j))
      })
    }
  }

  const changeStatus = (job: Job, e: any) => {
    axios.patch("http://localhost:8080/jobs/" + job.id, { status: e.target.checked }).then(res => {
      setJobs(jobs.map(j => j.id === job.id ? res.data : j))
    })
  }

  const deleteCompleted = () => {
    jobs.filter(j => j.status).forEach(done => {
      axios.delete("http://localhost:8080/jobs/" + done.id)
    })
    setJobs(jobs.filter(j => !j.status))
  }

  const deleteAll = () => {
    jobs.forEach(j => {
      axios.delete("http://localhost:8080/jobs/" + j.id)
    })
    setJobs([])
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Quản lý công việc</h2>

      <form
        onSubmit={(e) => { e.preventDefault(); addJob() }}
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Thêm
        </button>
      </form>
      <div className="flex justify-center gap-2 mb-4">
        <button className="px-3 py-1 rounded bg-blue-600 text-white">Tất cả</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">Hoàn thành</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">Đang làm</button>
      </div>

      {loading ? (
        <Loading />
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-400">Không có công việc</p>
      ) : (
        <div className="space-y-2">
          {jobs.map(job => (
            <div key={job.id} className="flex items-center justify-between border p-2 rounded">
              <label className={`flex items-center gap-2 ${job.status ? "line-through text-gray-400" : ""}`}>
                <input
                  type="checkbox"
                  checked={job.status}
                  onChange={e => changeStatus(job, e)}
                  className="w-4 h-4"
                />
                {job.taskName}
              </label>
              <div className="flex gap-2">
                <button onClick={() => editJob(job)} className="text-yellow-500 hover:text-yellow-600">
                  Sửa
                </button>
                <button onClick={() => deleteJob(job.id)} className="text-red-500 hover:text-red-600">
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button onClick={deleteCompleted} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">
          Xóa hoàn thành
        </button>
        <button onClick={deleteAll} className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">
          Xóa tất cả
        </button>
      </div>
    </div>
  )
}
