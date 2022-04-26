import { EmployeeCard } from "../common/employeeCard/EmployeeCard";

export const SuggestionsList = ({data, actionName, onClick, title}) => {
    return (
        <div className="employees-list-content">
            <h1>{title}</h1>
            <div className="employees-list">
                {data.length ? data.map(item =>
                    <EmployeeCard
                        key={item.id}
                        name={`${item.first_name} ${item.last_name}`}
                        job_title={item.job_title}
                        actionName={actionName}
                        onClick={() => onClick(item)}
                    />) : <p className="empty-list">List is empty!</p>}
            </div>
        </div>
    )
}