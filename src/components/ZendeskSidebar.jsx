import React, { useState, useEffect } from 'react';
import ZAFClient from 'zendesk_app_framework_sdk';

function useZAFClient() {
    const [client, setClient] = useState(null);

    useEffect(() => {
        if (typeof ZAFClient !== 'undefined' && !client) {
            // eslint-disable-next-line no-undef
            setClient(ZAFClient.init());
        }
    }, [client]);

    return client;
}

function ZendeskSidebar({ client }) {

    useZAFClient();

    const [ticketData, setTicketData] = useState({
        requesterEmail: 'Loading...',
        subject: 'Loading...',
        description: 'Loading...',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        console.log('client init ? ', typeof client);


        const fetchTicketData = async () => {
            console.log('Fetching ticket data...');
            try {
                const data = await client.get([
                    'ticket.requester.email',
                    'ticket.subject',
                    'ticket.description'
                ]);

                setTicketData({
                    requesterEmail: data['ticket.requester.email'] || 'N/A',
                    subject: data['ticket.subject'] || 'N/A',
                    description: data['ticket.description'] || 'N/A',
                });
                setTimeout(() => {
                    console.log('Ticket data fetched successfully:', ticketData);
                }, 3000)

                setLoading(false);

                client.invoke('resize', { width: '100%', height: 'auto' });
            } catch (err) {
                console.error('Error fetching ticket data:', err);
                setError('Failed to fetch ticket data. Please try again.');
                setLoading(false);
            }
        };

        fetchTicketData();

        return () => { };
    }, [client, ticketData]);

    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 h-screen overflow-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span>👤</span>
                    Ticket Details
                </h1>

                {loading ? (
                    <div className="flex items-center justify-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <span className="block sm:inline">{error}</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
                            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
                                <span>✉️</span> Requester Email
                            </h2>
                            <p className="text-lg text-gray-900 dark:text-white break-words">
                                {ticketData.requesterEmail}
                            </p>
                        </div>

                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
                            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
                                <span>📝</span> Subject
                            </h2>
                            <p className="text-lg text-gray-900 dark:text-white break-words">
                                {ticketData.subject}
                            </p>
                        </div>

                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
                            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
                                <span>💬</span> Description
                            </h2>
                            <p className="text-base text-gray-900 dark:text-white whitespace-pre-wrap break-words">
                                {ticketData.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ZendeskSidebar;
