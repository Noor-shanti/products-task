import './Feedback.css';

export default function ErrorMessage({ message }) {
    return (
        <div className="feedback-card error-card" role="alert">
            <span className="error-icon" aria-hidden="true">!</span>
            <h2>Couldn't load products</h2>
            <p>{message}</p>
        </div>
    );
}
