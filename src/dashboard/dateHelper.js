export default function dateHelper(period) {
    const now = new Date();
    let daysAgo;

    if(period === "today") daysAgo = 0;
    else if (period === "week") daysAgo = 7;
    else if (period === "month") daysAgo = 30;
    else daysAgo = 0;

    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo);
}

