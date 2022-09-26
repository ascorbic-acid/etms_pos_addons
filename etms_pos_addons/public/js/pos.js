
frappe.pages['point-of-sale'].refresh = function (frm) {
    var x = new MutationObserver(function (e) {
        console.log(e);
        const el = document.querySelector('.add-discount-wrapper');
        if (el) {
            x.disconnect();
            el.remove();
        }
    });
    x.observe(document.body, { childList: true });
};