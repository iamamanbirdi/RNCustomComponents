package com.custcomp;


import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.os.Handler;

public class SplashActivity extends AppCompatActivity {

    private static final int SPLASH_DISPLAY_TIME = 3000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        new Handler().postDelayed(new Runnable() {
            public void run() {


                Intent intent = new Intent();
                intent.setClass(SplashActivity.this,
                MainActivity.class);

                        SplashActivity.this.startActivity(intent);
                        SplashActivity.this.finish();

            

            }
        }, SPLASH_DISPLAY_TIME);
        
    }
}