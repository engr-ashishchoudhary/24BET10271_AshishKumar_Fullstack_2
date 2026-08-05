function LeaveForm({ employee }) {
  return (
    <div>
      <h2>Leave Request Form</h2>
      <p>Employee Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Available Leave Balance: {employee.leaveBalance} days</p>
    </div>
  );
}

export default LeaveForm;