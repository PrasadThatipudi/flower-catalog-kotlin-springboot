package com.services

import org.springframework.stereotype.Service

@Service
class CommentService {
    private val comments: Array<Comment> = arrayOf()

    fun getComments() = comments
}
