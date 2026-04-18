const createElement = (tag, attributes = {}) => {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    return element;
};

const getElement = (id) => document.getElementById(id);

const fetchComments = () => fetch('/comments').then(response => response.json());

const createForm = () => {
    const form = document.createElement('form');

    const authorLabel = createElement('label', { for: 'author' });
    authorLabel.textContent = 'Name:';
    
    const authorInput = createElement('input', {
        type: 'text',
        id: 'author',
        name: 'author',
        required: ''
    });

    const commentLabel = createElement('label', { for: 'comment' });
    commentLabel.textContent = 'Comment:';
    
    const commentTextarea = createElement('textarea', {
        id: 'comment',
        name: 'comment',
        rows: '10',
        cols: '40',
        required: ''
    });

    const submitButton = createElement('button', {
        type: 'submit',
        id: 'submit-button'
    });
    submitButton.textContent = 'Submit';

    form.append(authorLabel, authorInput, commentLabel, commentTextarea, submitButton);
    
    return form;
};

const createCommentRow = (comment) => {
    const commentRow = document.createElement('tr');

    const authorCell = document.createElement('td');
    authorCell.textContent = comment.author;

    const commentCell = document.createElement('td');
    commentCell.textContent = comment.comment;

    commentRow.append(authorCell, commentCell);

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

const postComment = (formData) => {
    return fetch("/comment", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    });

}

const handlePostComment = async (event) => {
    event.preventDefault();
    
    const author = getElement('author').value;
    const comment = getElement('comment').value;

    const formData = new URLSearchParams();
    formData.append('author', author);
    formData.append('comment', comment);

    await postComment(formData);

    getElement('author').value = '';
    getElement('comment').value = '';
    
    await loadComments();
}

const loadComments = async () => {
    const comments = await fetchComments();
    const commentsContainer = getElement('comments-section');
    commentsContainer.innerHTML = "";
    renderComments(comments, commentsContainer);
}

const main = async () => {
    const formContainer = getElement('form-section');
    const form = createForm();
    formContainer.appendChild(form);
    
    await loadComments();

    form.onsubmit = handlePostComment
}

globalThis.onload = main;