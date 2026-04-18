package com.services

import org.springframework.stereotype.Service

@Service
class CommentService {
    fun getComments() = arrayOf(mapOf("id" to 1, "author" to "John", "text" to "Hello"))
}
