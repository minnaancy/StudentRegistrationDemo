package com.example.StudentRegisterDemo.service;

import com.google.gson.Gson;

public class Utils {
    public static String printObject(Object object) {
        return new Gson().toJson(object);
    }
}
