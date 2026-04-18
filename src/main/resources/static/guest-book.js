const fetchComments = () => fetch('/comments').then(response => response.json());

const createCommentRow = (comment) => {
    const commentRow = document.createElement('tr');

    const autherCell = document.createElement('td');
    autherCell.textContent = comment.author;

    const commentCell = document.createElement('td');
    commentCell.textContent = comment.text;

    commentRow.append(autherCell, commentCell);

    return commentRow;
};

const createTableHeaderCell = (header) => {
    const headerCell = document.createElement('th');
    headerCell.textContent = header;
    return headerCell;
}

const createHeaders = (...headers) => {
    const headersRow = document.createElement('tr');

    const headerElements = headers.map(createTableHeaderCell);
    headersRow.append(...headerElements);

    return headersRow;
}

const renderComments = (comments, commentsContainer) => {
    const commentsHeader = document.createElement("thead");
    commentsHeader.append(createHeaders("Name", "Comment"));

    const commentsTable = document.createElement('table');
    commentsTable.append(commentsHeader)
    commentsTable.append(...comments.map(createCommentRow));
    commentsTable.border = 1;

    commentsContainer.appendChild(commentsTable);
};

const main = async () => {
    const comments = await fetchComments();
    const commentsContainer = document.getElementById('comments-section');
    renderComments(comments, commentsContainer);
}

globalThis.onload = main;