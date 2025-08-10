/* eslint-disable no-undef */
import { useEffect } from 'react';
import { appendZenScript } from '../functions/appendZenScript';

const Zendesk2 = () => {
    useEffect(() => {
        // const ticketFunction = async (zenClient) => {
        //     console.log('typeof client:', zenClient);
        //     const data = await zenClient.get([
        //         'ticket.requester.email',
        //         'ticket.subject',
        //         'ticket.description'
        //     ]);
        //     console.log(data);
        // }

       // appendZenScript()

        setInterval(async () => {

        }, 1000)
    }, [])

    return (
        <div>

        </div>
    );
};

export default Zendesk2;