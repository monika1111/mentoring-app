import User from "../../../assets/images/user.png";

export const EmployeeCard = ({
    name,
    job_title,
    actionName,
    onClick
}) => {
    return (
        <div>
            <div className="employee-img-name">
                <img src={User} alt="Employee" />
                <p>{name}</p>
            </div>
            <div className="footer">
                <p className="job-title">{job_title}</p>
                <div className="add-suggestion" onClick={onClick}>{actionName}</div>
            </div>
        </div>
    )
}