import { FC, useState } from 'react';

const Form: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string; } = {};

        if (!name) {
            newErrors.name = 'Name cannot be empty';
        }
        
        if (!email) {
            newErrors.email = 'Email cannot be empty';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Form Submitted:', { name, email });

        setName('');
        setEmail('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1>Form</h1>

            <div>
                <label className='form-label'>
                <span>Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Type your name'
                        className='input'
                    />
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            <div>
                <label className='form-label'>
                    <span>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Type your email'
                        className='input'
                    />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <button type="submit" className='button form-button'>Submit</button>
        </form>
    );
};

export default Form;
