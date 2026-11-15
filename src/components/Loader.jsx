import './Feedback.css';

export default function Loader() {
    return (
        <div className="feedback-card loading-card" role="status" aria-live="polite">
            <span className="loading-spinner" aria-hidden="true" />
            <p>Loading products...</p>
        </div>
    );
}