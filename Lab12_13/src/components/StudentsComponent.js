
function StudentsComponent({ students, onDeleteStudent }) {
    return (
        <div className="StudentComponent">
            <div className="Title">All Students</div>
            <hr />
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Program</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.program}</td>
                                <td> <button className="DeleteButton" type="button" onClick={() => onDeleteStudent(student.id)} >Delete</button></td>
                            </tr>
                        )) ?? <tr key={1}>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentsComponent;