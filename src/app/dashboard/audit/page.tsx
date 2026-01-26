'use client';

export default function AuditPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Audit Log</h1>
            <p className="text-gray-500">Every state transition is recorded. Nothing is erased.</p>
            <div className="border border-gray-800 rounded-lg p-12 text-center text-gray-500 bg-gray-900/10">
                <div className="text-4xl mb-4 text-gray-700">◈</div>
                <p>Audit log is being indexed...</p>
                <p className="text-xs mt-2 text-gray-600">Events are safely stored in the backend.</p>
            </div>
        </div>
    );
}
