import { useEffect } from 'react';

const Zendesk = ({ zendeskKey, children }) => {
    useEffect(() => {
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
        script.src = import.meta.env.VITE_ZENDESK_LINK //`https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
        script.async = true;

        script.onload = () => {
            if (window.zE) {
                console.log('Zendesk script loaded successfully');
            }
        };

        script.onerror = (e) => {
            console.error('Failed to load Zendesk script', e);
        };

        document.body.appendChild(script);

        return () => {
            const widgetFrame = document.getElementById('webWidget');
            if (widgetFrame) {
                widgetFrame.remove();
            }
            const snippetScript = document.getElementById('ze-snippet');
            if (snippetScript) {
                snippetScript.remove();
            }
            delete window.zE;
            delete window.$zopim;
        };
    }, [zendeskKey]);

    return (
        <div>
            {children}
        </div>
    );
};

export default Zendesk;