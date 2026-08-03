package com.hasbi.exception;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

import java.util.HashMap;
import java.util.Map;

@Provider
public class GlobalExceptionMapper implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {

        if (exception instanceof NotFoundException) {

            Map<String, Object> body = new HashMap<>();
            body.put("message", exception.getMessage());

            return Response.status(Response.Status.NOT_FOUND)
                    .entity(body)
                    .type(MediaType.APPLICATION_JSON)
                    .build();
        }

        if (exception instanceof ConstraintViolationException e) {

            Map<String, String> errors = new HashMap<>();

            for (ConstraintViolation<?> violation : e.getConstraintViolations()) {
                errors.put(
                        violation.getPropertyPath().toString(),
                        violation.getMessage()
                );
            }

            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(errors)
                    .type(MediaType.APPLICATION_JSON)
                    .build();
        }

        Map<String, Object> body = new HashMap<>();
        body.put("message", exception.getMessage());

        return Response.serverError()
                .entity(body)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }
}