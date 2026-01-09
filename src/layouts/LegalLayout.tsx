import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function LegalLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Optional: Simple header or back button since Navbar is hidden */}
            <header className="container mx-auto px-6 py-4">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </header>

            <main className="flex-1 container mx-auto px-6 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
