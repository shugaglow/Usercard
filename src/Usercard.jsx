import PropTypes from 'prop-types';

function Usercard ({ image, name, age, occupation, description, email}){
    return (
        <div className='card'>
        <div className="image-container">
            <img src={image} alt={`${name}`} />
        </div>
        <div className="name-and-age">
            <h2>{name}</h2>
            <p><strong>Age:</strong> {age}</p>
            <p className='bold'>{occupation}</p>
        </div>

        <div className="description">
            <p>{description}</p>
        </div>

        <div className="email">
            <p>{email}</p>
        </div>
                </div>
);
};

// Prop type validation
Usercard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired

};

export default Usercard