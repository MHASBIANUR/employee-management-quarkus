package com.hasbi.resource;

import com.hasbi.dto.EmployeeRequest;
import com.hasbi.dto.EmployeeResponse;
import com.hasbi.service.EmployeeService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

@Path("/api/employees")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EmployeeResource {

    @Inject
    EmployeeService employeeService;

    @POST
    public Response create(@Valid EmployeeRequest request) {

        EmployeeResponse response = employeeService.create(request);

        return Response.created(
                URI.create("/employees/" + response.id)
        ).entity(response).build();
    }

    @GET
    public List<EmployeeResponse> findAll() {
        return employeeService.findAll();
    }

    @GET
    @Path("/{id}")
    public EmployeeResponse findById(@PathParam("id") Long id) {
        return employeeService.findById(id);
    }

    @PUT
    @Path("/{id}")
    public EmployeeResponse update(
        @PathParam("id") Long id,
        @Valid EmployeeRequest request)
    {
        return employeeService.update(id, request);
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {

        employeeService.delete(id);

        return Response.noContent().build();
    }

}