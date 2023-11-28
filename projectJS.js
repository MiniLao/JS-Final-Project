function generateMealPlan()
{
    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    // Validate email
    if (!validateEmail(email))
    {
        alert('Please enter a valid email address.');
        return;
    }

    // Days of the week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Generate the meal plan content
    const mealPlanContent = `
        <h2>${name}'s Meal Plan</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
        <h3>Meal Plan for the Week</h3>
        <ul>
            <li><strong>Monday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Tuesday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Wednesday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Thursday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Friday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Saturday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            <li><strong>Sunday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
        </ul>
    `;

    // Open a new window and write the meal plan content
    const mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanContent);
}

function clearMealPlan()
{
    // Clear all input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('breakfast').value = '';
    document.getElementById('snack1').value = '';
    document.getElementById('lunch').value = '';
    document.getElementById('snack2').value = '';
    document.getElementById('dinner').value = '';
}

function validateEmail(email)
{
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function printMealPlan()
{
    // Print the meal plan window
    window.print();
}

function downloadMealPlan()
{
    // Download the meal plan content as a text file
    const content = generateMealPlanContentForDownload();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'meal_plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateMealPlanContentForDownload()
{
    // Similar to generateMealPlan() but returns a plain text content for download
    // Use the user input to construct the content
}
