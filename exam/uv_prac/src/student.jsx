import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent : PropTypes.bool,
}

Students.defaultProps = {
    name : "Guest",
    age : 18,
    isStudent : true,

}
export default Students