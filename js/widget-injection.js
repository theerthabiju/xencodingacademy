(function () {
    const buttons = [
        {
            href: 'https://wa.me/919746307912?text=' + encodeURIComponent('Hello! I am interested in your courses.'),
            target: '_blank',
            background: '#25d366',
            shadow: 'rgba(37,211,102,0.4)',
            shadowHover: 'rgba(37,211,102,0.55)',
            bottom: '28px',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.109 1.523 5.836L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.376l-.36-.214-3.733.961.99-3.641-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>`
        },
        {
            href: 'tel:+919746307912',
            target: '_self',
            background: '#3857a2',
            shadow: '#3857a2',
            shadowHover: '#3857a2',
            bottom: '96px',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
            </svg>`
        }
    ];

    buttons.forEach(({ href, target, background, shadow, shadowHover, bottom, icon }) => {
        const btn = document.createElement('a');
        btn.href = href;
        btn.target = target;
        btn.rel = 'noopener noreferrer';
        btn.innerHTML = icon;

        Object.assign(btn.style, {
            position: 'fixed',
            bottom: bottom,
            left: '28px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: background,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 16px ${shadow}`,
            zIndex: '9999',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
        });

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.boxShadow = `0 6px 24px ${shadowHover}`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = `0 4px 16px ${shadow}`;
        });

        document.body.appendChild(btn);
    });
})();