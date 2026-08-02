const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.textContent = Math.ceil(count).toLocaleString();

                requestAnimationFrame(update);

            } else {

                counter.textContent = target.toLocaleString() + "+";

            }

        };

        update();

        observer.unobserve(counter);

    });

});

counters.forEach(counter => observer.observe(counter));
