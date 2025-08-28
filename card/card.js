let isPlaying = false;
        let currentEpisode = 1;

        function togglePlay() {
            const playBtn = document.querySelector('.play-btn');
            isPlaying = !isPlaying;
            playBtn.innerHTML = isPlaying ? '⏸' : '▶';
            playBtn.style.background = isPlaying ? '#28a745' : 'rgba(255,255,255,0.9)';
        }

        function selectEpisode(element, episodeNumber) {
            // Remove active class from all episodes
            document.querySelectorAll('.episode-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to selected episode
            element.classList.add('active');
            currentEpisode = episodeNumber;
            
            // Add fade effect to video player
            const videoPlayer = document.querySelector('.video-player');
            videoPlayer.style.opacity = '0.5';
            setTimeout(() => {
                videoPlayer.style.opacity = '1';
            }, 300);
            
            // Reset play button
            isPlaying = false;
            document.querySelector('.play-btn').innerHTML = '▶';
            document.querySelector('.play-btn').style.background = 'rgba(255,255,255,0.9)';
        }

        function closePlayer() {
            // Add closing animation
            document.body.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                alert('Player closed!');
                document.body.style.animation = '';
            }, 500);
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to episode thumbs
            document.querySelectorAll('.episode-thumb').forEach(thumb => {
                thumb.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                    this.style.transition = 'all 0.3s ease';
                });
                
                thumb.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
            // Add gradient animation to video player
            const videoPlayer = document.querySelector('.video-player');
            setInterval(() => {
                const colors = [
                    'linear-gradient(45deg, #4a148c, #7b1fa2, #8e24aa)',
                    'linear-gradient(45deg, #d32f2f, #f57c00, #fbc02d)',
                    'linear-gradient(45deg, #1976d2, #388e3c, #7b1fa2)',
                    'linear-gradient(45deg, #512da8, #303f9f, #1976d2)'
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                videoPlayer.style.background = randomColor;
            }, 5000);
        });

        // Toggle view buttons
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });