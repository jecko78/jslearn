document.addEventListener('DOMContentLoaded', () => {
            const pages = document.querySelectorAll('.page');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const indicatorsContainer = document.getElementById('page-indicators');
            const totalPages = pages.length;
            let currentPageIndex = 0;

            // Create page indicators
            for (let i = 0; i < totalPages; i++) {
                const indicator = document.createElement('button');
                indicator.classList.add('w-3', 'h-3', 'rounded-full', 'transition', 'bg-slate-300');
                indicator.dataset.index = i;
                indicator.addEventListener('click', () => {
                    goToPage(i);
                });
                indicatorsContainer.appendChild(indicator);
            }
            const indicators = indicatorsContainer.querySelectorAll('button');

            function updateUI() {
                // Show/hide pages
                pages.forEach((page, index) => {
                    if (index === currentPageIndex) {
                        // Delay showing to allow hide animation to start
                        setTimeout(() => page.classList.remove('hidden'), 50);
                    } else {
                        page.classList.add('hidden');
                    }
                });

                // Update buttons
                prevBtn.disabled = currentPageIndex === 0;
                nextBtn.disabled = currentPageIndex === totalPages - 1;

                // Update indicators
                indicators.forEach((indicator, index) => {
                    if (index === currentPageIndex) {
                        indicator.classList.remove('bg-slate-300');
                        indicator.classList.add('bg-sky-600');
                    } else {
                        indicator.classList.remove('bg-sky-600');
                        indicator.classList.add('bg-slate-300');
                    }
                });
            }

            function goToPage(index) {
                currentPageIndex = index;
                updateUI();
            }

            prevBtn.addEventListener('click', () => {
                if (currentPageIndex > 0) {
                    currentPageIndex--;
                    updateUI();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentPageIndex < totalPages - 1) {
                    currentPageIndex++;
                    updateUI();
                }
            });

            // Initial setup
            updateUI();
        });