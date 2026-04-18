package com.services

import org.springframework.stereotype.Service

@Service
class CommentService {
    private var comments: MutableList<Comment> = mutableListOf()

    fun getComments(): List<Comment> = comments
    
    fun saveComment(author: String, comment: String) {
        comments.add(Comment(comments.size, author, comment))
    }
}
