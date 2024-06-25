function toggleSubItems(itemId) {
    var subItems = document.getElementById(itemId + 'SubItems');
    subItems.classList.toggle('active');

    var caret = document.getElementById(itemId + 'Caret');
    caret.classList.toggle('rotate'); // Toggle the 'rotate' class
}

function showContent(contentType) {
    var content = document.getElementById('content');

    switch (contentType) {
        case 'bio':
            content.innerHTML =
            `
            <p>
                /**<br><br>
                About Me <br><br>
                Greetings! I'm Chris Anthony C. Cañal, a dedicated freelance web developer who crafts websites from
                scratch. Being self-taught, I've honed my skills through hands-on experience and a relentless pursuit of knowledge. <br/> <br/>
                Located in Cebu City, Cebu, I specialize in creating modern, responsive websites that prioritize both aesthetics and user experience.
                
                My approach is rooted in a blend of creativity and technical prowess, allowing me to deliver innovative solutions to every project. <br/><br/>
                Outside of coding, I find joy in exploring new technologies and contributing to open-source projects. 
                Continuously eager to expand my skill set, I thrive on challenges and am always seeking opportunities to grow.<br/><br/>
                Whether you're a startup, small business, or individual entrepreneur, I'm here to help you realize your digital aspirations.<br>
                <br>
                */
            </p>
            `;
          
            break;
        case 'interest':
            content.innerHTML = 
            `
            <p>
                /**<br><br>
                Interest <br><br>
                As a front-end developer, I'm passionate about learning and exploring various aspects of web development.<br/><br/>
                Some of my interests include:<br/><br/>
                Learning new programming languages like HTML, CSS, and JavaScript.<br/>
                Exploring popular front-end frameworks and libraries such as React, Vue.js, Tailwind CSS and Bootstrap.<br/>
                Understanding responsive web design principles to create websites that work well on all devices.<br/>
                Practicing user interface (UI) and user experience (UX) design to create visually appealing and user-friendly websites.<br/>
                Implementing website designs from Figma templates to improve my design skills and create professional-looking websites.<br/>
                Staying updated with the latest web development trends and technologies by following blogs, tutorials, and online courses.<br/>
                Contributing to open-source projects to gain hands-on experience and collaborate with other developers.<br/>
                Building a portfolio of projects to showcase my skills and attract potential clients for freelance work.<br/>
                Overall, I'm enthusiastic about embarking on my journey as a front-end developer, honing my skills,
                and building exciting projects that make a positive impact.
                <br>
                <br>
                */
            </p>
            `;
            break;
        case 'skills':
            content.innerHTML = 
            `
            <nav class="skills">
              <nav class="skills-container">
                  <nav class="skills-frontend" style="margin-bottom:1rem;">
                    <h2 id="skill-title">Frontend</h2>
                    <nav class="skills-button">
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage" src="images/HTML5.png" />
                          <p style="margin-top:-0.5rem;">HTML</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/CSS3.png" />
                          <p style="margin-top:-0.5rem;">CSS</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/JavaScript.png" />
                          <p style="margin-top:-0.5rem;">JavaScript</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage" src="images/Bootstrap.png" />
                          <p style="margin-top:-0.5rem;">Bootstrap</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/react.png" />
                          <p style="margin-top:-0.5rem;">React JS</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/mobile.png" />
                          <p style="margin-top:-0.5rem;">Mobile Responsive</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/JQuery.png" />
                          <p style="margin-top:-0.5rem;">JQuery</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/GitHub.png" />
                          <p style="margin-top:-0.5rem;">GitHub</p>
                      </nav>
                      <nav class="skill-butn-img">
                          <input type="image" id="myimage"  src="images/Figma.png" />
                          <p style="margin-top:-0.5rem;">Figma</p>
                      </nav>
                    </nav>
                  </nav>

              </nav>
            </nav>
               
            `;
            break;
        case 'hobbies':
            content.innerHTML = 
            `
            <p>
                /**<br><br>
                Hobbies <br><br>
                <b>Gaming</b>:<br>
                Enjoy playing video games during free time, particularly strategy and role-playing games, as they enhance problem-solving and critical thinking skills.<br/><br/>
                <b>Watching Anime:</b><br/>
                Enthusiastic about Japanese animation, enjoy exploring different genres and series, appreciating the storytelling and artistic expression.<br/><br/>
                <b>Staying Updated with Web Development:</b><br>
                Regularly check for updates and new features in HTML, CSS, JavaScript, and frameworks to stay current with industry trends and enhance skills.<br/><br/>
                <b>Website Design:</b><br>
                Passionate about creating websites, often use Figma templates to design and develop personal projects, experimenting with different layouts and styles.
                <br>
                <br>
                */
            </p>
            `;
            break;
        case 'contact':
            content.innerHTML = 
                `
                <form id="contactForm">
                    <nav>
                        <label for="name">_name:</label><br/>
                        <input type="text" id="name" name="name" required><br><br>
                    </nav>
                    <nav>
                        <label for="email">_email:</label><br>
                        <input type="email" id="email" name="email" required><br><br>
                    </nav>
                    <nav>
                        <label for="message">_message:</label><br>
                        <textarea id="message" name="message" rows="8" required></textarea><br><br>
                    </nav>
                    <button type="submit" id="submit">submit-message</button>
                </form>
                `;  

                const form = document.getElementById('contactForm');

                // Add submit event listener to the form
                form.addEventListener('submit', function(event) {
                    // Prevent the default form submission behavior
                    event.preventDefault();

                    // Clear the content area
                    content.innerHTML = 
                    `
                    <nav class="message-contact">
                    <p class="title">Thank You!&#129311 </p>
                    <p style="margin-bottom:2.5rem;">Your message has been accepted. You will receive answer really soon.</p>

                    <a href="contact.html">send-new-message</a>
                    </nav>
                    `;

                });
                break;
            
        default:
            content.innerHTML = '<h3>404 Not Found</h3><p>The content you are looking for is not available.</p>';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.sidebar-checkbox');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const contentId = this.id + '-content'; // Corrected content ID generation
            const content = document.getElementById(contentId);
            
            // Hide all content
            document.querySelectorAll('.content > div').forEach(function(div) {
                div.style.display = 'none';
            });
            
            // Show content for checked checkbox
            if (this.checked) {
                content.style.display = 'block';
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');
    var menuItems = document.getElementById('menu-items');
    var menuContact = document.getElementById('menu-contact');

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('show-menu');
        menuContact.classList.toggle('show-menu');
    });
});