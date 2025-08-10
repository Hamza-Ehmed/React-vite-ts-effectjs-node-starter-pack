export const appendZenScript = () => {
    if (document.getElementById('ze-snippet')) {
        if (window.zE) {
            window.zE('webWidget', 'updateSettings', {
                webWidget: {
                    chat: {
                        suppress: false,
                    },
                },
            });
        }
        return;
    }

    const script = document.createElement('script');
    script.id = 'ze-snippet';
    console.log('Zendesk script is being appended with api key: ', import.meta.env.VITE_ZENDESK_LINK);
    script.src = import.meta.env.VITE_ZENDESK_LINK //`https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
    script.async = true;

    script.onload = async () => {
        if (window.zE) {
            console.log('Zendesk script loaded successfully');
            // eslint-disable-next-line no-undef
            const data = window.zE.init()
            console.log('Zendesk data:', data);
        }
    };

    script.onerror = (e) => {
        console.error('Failed to load Zendesk script', e);
    };

    document.body.appendChild(script);
}