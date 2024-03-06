'use client'

export function ForgotPasswordForm{} {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('submit from forgot password')
    };

    return <div>ForgotPasswordForm</div>
}