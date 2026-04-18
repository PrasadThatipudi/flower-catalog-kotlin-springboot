package com.controllers

import com.services.Comment
import com.services.CommentService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class GuestBookController (
    val commentService: CommentService
){

    @GetMapping("/comments")
    fun getComments(): Array<Comment> {
        return commentService.getComments()
    }
}