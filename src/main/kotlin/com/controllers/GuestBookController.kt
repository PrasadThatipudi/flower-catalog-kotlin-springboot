package com.controllers

import com.services.Comment
import com.services.CommentService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class GuestBookController (
    val commentService: CommentService
){

    @GetMapping("/comments")
    fun getComments(): List<Comment> {
        return commentService.getComments()
    }

    @PostMapping("/comment")
    fun postComment(@RequestParam author: String, @RequestParam comment: String) {
        commentService.saveComment(author, comment)
    }
}