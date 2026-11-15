import axios from 'axios';
import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import './Products.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState('');

    const getProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch {
            setError('error to load data');
        } finally {
            setIsLoader(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoader) {
        return <main className="products-page"><Loader /></main>;
    }

    if (error) {
        return <main className="products-page"><ErrorMessage message={error} /></main>;
    }

    return (
        <main className="products-page">
            <section className="products">
                <header className="products-header">
                    <div>
                        <p className="products-eyebrow">THE COLLECTION</p>
                        <h1>Find your next favorite</h1>
                        <p className="products-subtitle">A few good things, all in one place.</p>
                    </div>
                    <span className="products-count">{products.length} products</span>
                </header>

                <div className="products-grid">
                    {products.map((product) => (
                        <article className="product-card" key={product.id}>
                            <div className="product-image-wrap">
                                <img className="product-image" src={product.thumbnail} alt={product.title} />
                                <span className="product-category">{product.category}</span>
                            </div>
                            <div className="product-info">
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}