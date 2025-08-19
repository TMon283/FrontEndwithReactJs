import React from 'react'

export default function ListJob() {
    const job = [
        { id: 1, jobName: "Cras justo odio" },
        { id: 2, jobName: "Cras justo odio"}
    ]
    console.log(job);
    return (
        <>
            <ul className="list-group mb-0">
                {
                    job.map((value, index) => {
                        return (
                            <li key={index}
                                className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                                style={{ backgroundColor: "#f4f6f7" }}
                            >
                                <div>
                                    <input
                                        className="form-check-input
                                                  me-2"
                                        type="checkbox"
                                    />  
                                    <s>{value.jobName}</s>
                                </div>
                                <div>
                                    <a href="#!" className="text-info" title="Sửa công việc">
                                        <i
                                            className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                        />
                                    </a>
                                    <a
                                        href="#!"
                                        className="text-danger"
                                        title="Xóa công việc"
                                    >
                                        <i
                                            className="fas
                                                      fa-trash-alt"
                                        />
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}